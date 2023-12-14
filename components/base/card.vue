<script lang="ts" setup></script>

<template>
  <Card class="overflow-hidden">
    <slot />

    <CardHeader>
      <CardTitle>
        <slot name="title" />
      </CardTitle>
      <CardDescription>
        <slot name="description" />
      </CardDescription>
    </CardHeader>
    <CardContent>
      <slot name="content" />
    </CardContent>
    <CardFooter>
      <slot name="footer" />
    </CardFooter>
  </Card>
</template>
