/*var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + Date()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    newName: '',
    messages: [
      'Learn JavaScript',
      'Learn Vue',
      'Learn'
    ]
  },

  methods: {
    addName() {
      this.messages.push(this.newName);

      this.newName = '';
    }
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Carl Santos'
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id:0, text: 'Vegetables' },
      { id:1, text: 'Cheese' },
      { id:2, text: 'Butter' }
    ]
  }
});

var app8 = new Vue({
  el: '#app-8',
  data: {
    studentsList: [
      { name: 'Carl Santos',id: 20402202,status: 1 },
      { name: 'Santos Carl',id: 22022040,status: 0 },
      { name: 'Apple Dizon',id: 22055060,status: 0 }
    ]
  }
});*/

var app9 = new Vue({
  el: '#app-9',
  data: {
    index: '',
    title: '',
    body: '',
    editClick: true,
    update: false,

    blogs: [
      
    ]

  },


  methods: {
    addPost() {
      this.blogs.push({ title: this.title, body: this.body });

      this.title = '';
      this.body = '';
    },
    editPost(x) {
      index = x;
      this.update = true;
      this.editClick = false;

      this.title = this.blogs[index].title;
      this.body = this.blogs[index].body;
    },
    updatePost() {
      this.blogs.splice(index, 1, { title: this.title, body: this.body });

      this.title = '';
      this.body = '';
      this.index = '';
      this.editClick = true;
      this.update = false;
    }
  }
});
