const { createApp, ref, computed } = Vue;

const app = createApp({
  setup() {
	const fullName = 'Zsolt Takacs';
	const nickname = 'ignotus87';
	const mainTags = ['.net', 'wpf', 'full-stack', 'sql-server', 'php', 'javascript', 'etc.'];
	const projects = ref([
               {
				   title: 'Quiz about the Gerje',
				   link: 'https://github.com/ignotus87/gerje-kviz',
				   tags: ['js', 'html'],
				   description: 'a Hungarian quiz on the stream Gerje flowing through Albertirsa',
				   thumbnail: 'images/gerje-kviz.png'
			   },
			   {
				   title: 'mushroom lookup',
				   link: 'https://github.com/ignotus87/mige-lookup',
				   tags: ['js', 'html'],
				   description: 'lookup app for searching in the indexed repository of MIGE - Miskolci Gombász Egyesület',
				   thumbnail: 'images/mige.png'
			   },
			   {
				   title: 'albertirsa.info',
				   link: 'https://ignotus87.github.io/albertirsa/',
				   tags: ['js', 'html'],
				   description: 'info repo page for the city of Albertirsa',
				   thumbnail: 'images/albertirsa.png'
			   },
			   {
				   title: 'hungarian fish quiz',
				   link: 'https://ignotus87.github.io/hu-fish-quiz/',
				   tags: ['js', 'html'],
				   description: 'learning material for the Hungarian fisher certificate',
				   thumbnail: 'images/fish.jpg'
			   },
			   {
                   title: 'barcodegenerator',
                   link: 'https:github.com/ignotus87/barcodegenerator',
                   tags: ['.net', 'wpf', 'c#'],
                   description: 'a barcode generator implemented in wpf, utilizing zxing',
                   thumbnail: 'images/barcode.png'
               },
               {
                   title: 'laugh!',
                   link: 'https:github.com/ignotus87/laughapp',
                   tags: ['xamarin forms', 'xamarin android'],
                   description: 'a sample app showing a random image with playing a random sound, switching to another one when tapped. also includes an ad bar.',
                   thumbnail: 'images/laugh-thumbnail.png'
               },
               {
                   title: 'rfid reader',
                   link: 'https:github.com/ignotus87/rfidreader',
                   tags: ['xamarin android'],
                   description: 'a xamarin app to collect mifare smart card ids or in fact any other rfid.',
                   thumbnail: 'images/smartcard.jpg'
               },
			   {
                   title: 'wpf please wait - example application',
                   link: 'https:github.com/ignotus87/wpfpleasewaitexample',
                   tags: ['.net', 'wpf', 'c#'],
                   description: 'a sample app demonstrating the use of the busyindicator of xceed wpf toolkit in an application.',
                   thumbnail: 'images/please-wait.jpg'
               },
			   {
                   title: 'wpf printable user control template demo',
                   link: 'https:github.com/ignotus87/wpfprintusercontrol',
                   tags: ['.net', 'wpf', 'c#'],
                   description: 'a sample app showing you how to create a printable, a4-sized template of 2x6 labels containing some pieces of text.',
                   thumbnail: 'images/printable.jpg'
               }			   
           ]);
	
    return {
	  projects,
	  fullName,
	  nickname,
	  mainTags
    }
  }
});
app.mount("#main-container");


// var homeSection = new Vue({
    // el: '#home',
    // data: {
        // 
	// }
// });

// app.component('main-header', {
    // props: ['title'],
    // template: '<h1 class="main-header">{{ title }}</h1>'
// });

// app.component('nickname', {
    // props: ['nickname'],
    // template: '<div class="name-div">{{ nickname }}</div>'
// });

// app.component('main-tags', {
    // props: ['tags'],
    // template: '<p class="main-tags"><span class="main-tag" v-for="tag in tags">{{ tag }}</span></p>'
// });

// var projects = new Vue({
    // el: '#projects',
    // data: {
  
// });
