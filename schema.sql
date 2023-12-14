CREATE TABLE public.profiles (
  id uuid PRIMARY KEY NOT NULL REFERENCES auth.users (id),
  first_name VARCHAR CHECK (first_name <> ''),
  middle_name VARCHAR CHECK (middle_name <> ''),
  last_name VARCHAR CHECK (last_name <> ''),
  email TEXT UNIQUE NOT NULL CHECK (email <> ''),
  avatar_url TEXT CHECK (avatar_url <> ''),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP
);

-- Trigger to handle new registered user
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER  AS $$
BEGIN
  INSERT INTO public.profiles (id, email) VALUES (new.id, new.email);

  return new;
END
$$ language plpgsql security definer;

CREATE TRIGGER on_auth_user_created_create_public_user_record
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE PROCEDURE handle_new_user();

alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

  create policy "Profiles are viewable by users who created them."
  on profiles for select
  using ( auth.uid() = id );

  ---------------- TODO TABLE ------------------

create table public.todos (
  id bigint generated by default as identity primary key,
  user_id uuid references auth.users not null,
  task text check (char_length(task) > 3),
  is_complete boolean default false,
  inserted_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table todos enable row level security;

create policy "Individuals can create todos." on todos for
    insert with check (auth.uid() = user_id);

create policy "Individuals can view their own todos. " on todos for
    select using (auth.uid() = user_id);

create policy "Individuals can update their own todos." on todos for
    update using (auth.uid() = user_id);
    
create policy "Individuals can delete their own todos." on todos for
    delete using (auth.uid() = user_id);