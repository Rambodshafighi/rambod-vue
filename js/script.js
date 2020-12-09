window.Event = new Vue();

Vue.component('alert', {
    props: ['title', 'message', 'type'],
    template: `
      <div :class="['alert' , type ]" role="alert">
        <button type="button" class="close" @click="close">
          <span aria-hidden="true">×</span>
        </button>
        <strong>{{ title }}!</strong> {{ message }}.
      </div>
  `,
    methods: {
        close() {
            this.$emit('close')
        }
    }
});

Vue.component('my-butoon', {
    template: '<button type="button" v-on:click="conter++">{{conter}}</button>',
    data() {
        return {
            conter: 0
        }
    }
});

Vue.component('jumbotron', {
    template: `
<div class="jumbotron">
<slot name="title"></slot>
<p>
  <slot></slot>
</p>
<a class="btn btn-primary btn-lg" href="#" role="button">مشاهده بیشتر</a>
</div>`
})

Vue.component('todos', {
    props: ['todos'],
    template: `
  <ul class="list-group">
    <todo v-for="(todo , index) in todos" :todo="todo" :index="index"></todo>
  </ul>
  `
});

Vue.component('todo', {
    props: ['todo', 'index'],
    template: `
      <li class="list-group-item"><a href="#" :class="{ complete : todo.complete }" v-on:click.prevent="removeTodo(index)">{{ todo.title }}</a></li>
  `,
    methods: {
        removeTodo(index) {
            Event.$emit('remove', index);
        }
    }
});


let app = new Vue({
    el: '#app',
    data: {
        newTodo: {
            title: '',
            complete: false
        },
        todos: [
            { title: 'انجام پروژه 1', complete: true },
            { title: 'قرار دادن پست در سایت', complete: false },
            { title: 'بازی فوتبال', complete: true }
        ],
        alert: {
            title: '',
            message: '',
            show: false,
            type: ''
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.title != '') {
                this.todos.push(this.newTodo);
                this.newTodo = { title: '', complete: false };
                this.alert = {
                    title: 'موفقیت آمیز',
                    message: 'کار جدید با موفقیت اضافه شد',
                    show: true,
                    type: 'alert-success'
                }
            } else {
                this.alert = {
                    title: 'خطا',
                    message: 'لطفا فیلد کار جدید را پر کنید',
                    show: true,
                    type: 'alert-danger'
                }
            }
        },
        removeTodo(index) {
            this.todos[index].complete = !this.todos[index].complete;
        }
    },
    computed: {
        completeTodos() {
            return this.todos.filter(todo => todo.complete);
        },
        showCompleteBox() {
            return this.todos.filter(todo => todo.complete).length > 0;
        }
    },
    created() {
        Event.$on('remove', (index) => {
            this.removeTodo(index);
        });
    }


});
var app1 = new Vue({
    el: '#app1',
    data: {
        message: ''
    }
})
var app3 = new Vue({
    el: '#app3'
})
let app4 = new Vue({
    el: '#app4',
    data: {
        imageUrl: 'https://roocket.ir/public/image/2017/6/13/vuejs.jpg',
        altImage: 'اموزش با اگولار',
        style: {
            width: 1000 + 'px',
            margin: 50 + 'px'
        }
    }
});
let myButton = new Vue({
    el: '#my-button',
});
var clickShomar = new Vue({
    el: '#click-shomar',
    data: {
        counter: 0
    }
})