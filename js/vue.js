const app = new Vue(
    {
        el: '#root',
        data: {
            items: [
                {
                    url: 'img/01.jpg',
                    title: "Svezia",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
                },
                {
                    url: 'img/02.jpg',
                    title: "Svizzera",
                    text: "Lorem ipsum."
                },
                {
                    url: 'img/03.jpg',
                    title: "Gran Bretagna",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                },
                {
                    url: 'img/04.jpg',
                    title: "Germania",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
                },
                {
                    url: 'img/05.jpg',
                    title: "Paradise",
                    text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
                }
            ],

            indiceAttivo: 0,
        },
        methods: {
            up: function() {
                if(this.indiceAttivo == 0) {
                    this.indiceAttivo = this.items.length - 1;
                } else if(this.indiceAttivo < this.items.length) {
                    --this.indiceAttivo;
                }
            },
            down: function() {
                if(this.indiceAttivo < this.items.length - 1) {
                    ++this.indiceAttivo;
                } else if(this.indiceAttivo == this.items.length - 1) {
                    this.indiceAttivo = 0;
                }
            }
        }
    }
)