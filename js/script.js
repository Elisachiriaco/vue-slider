const app = new Vue({
  el: '#app',
  data: {
    items: [
      {
          img: 'img/01.jpg',
          titolo: 'Svezia',
          testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
      },
      {
          img: 'img/02.jpg',
          titolo: 'Svizzera',
          testo: 'Lorem ipsum'
      },
      {
          img: 'img/03.jpg',
          titolo: 'Gran Bretagna',
          testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
          img: 'img/04.jpg',
          titolo: 'Germania',
          testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
      },
      {
          img: 'img/05.jpg',
          titolo: 'Paradise',
          testo: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
      }
  ],
  activeIndex: 0,
  intervalId: null 
  },
  methods: {
    nextSlide(){
      this.activeIndex = (this.activeIndex === 4) ? 0 : this.activeIndex += 1;
    },
    prevSlide(){
      this.activeIndex = (this.activeIndex === 0) ? 4 : this.activeIndex -= 1;
    },
    autoScroll(){
      this.intervalId = setInterval(()=>{
        this.nextSlide();
      },2000)
    },
    stopAutoScroll(){
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
    imageCurrent(index){
      if (this.activeIndex != index){
          this.activeIndex = index 
      }
  }
  },
  mounted(){
      this.autoScroll()
  }
})


