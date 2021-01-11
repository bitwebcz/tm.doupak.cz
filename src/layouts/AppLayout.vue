<template>
    <aside />

    <header>
        <nav>
          <router-link :to="{ name: 'Home' }">Home</router-link> |
          <router-link :to="{ name: 'About' }">About</router-link>
        </nav>
    </header>

    <main>
        <router-view />
    </main>

    <footer />
</template>

<script>
export default {
  name: "AppLayout"
};
</script>
