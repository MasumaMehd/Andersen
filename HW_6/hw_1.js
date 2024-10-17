class DataHandler {
  constructor() {
    this.posts = new Map();
  }

  async fetchPosts() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      this.clearPosts();
      data.forEach((post) => {
        this.posts.set(post.id, post);
      });
      return Promise.resolve();
    } catch {
      return Promise.reject();
    }
  }

  listPosts() {
    return Array.from(this.posts.values()).sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  getPost(id) {
    return this.posts.get(id);
  }

  clearPosts() {
    this.posts.clear();
  }
}

const dataHandler = new DataHandler();
dataHandler
  .fetchPosts()
  .then(() => {
    console.log(dataHandler.listPosts());
    console.log(dataHandler.getPost(3));
    dataHandler.clearPosts();
    console.log(dataHandler.listPosts());
  })
  .catch((error) => {
    console.error(error);
  });
