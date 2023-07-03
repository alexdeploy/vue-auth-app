<template>
    <div class="auth-layout">
      <header>
        <nav>
            <p>Layout Header</p>
        </nav>
      </header>
      <main>
        <div class="wrapper">
          <RouterView />
        </div>
      </main>
      <footer>
        <p>Layout Footer</p>
      </footer>
    </div>
  </template>
  
  <style scoped>
  .auth-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .auth-layout main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2em;
  }
  
  .wrapper {
    max-width: 400px;
    width: 400px;
  }
  
  </style>
  