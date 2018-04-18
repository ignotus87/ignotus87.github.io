Vue.component('main-header', {
    props: ['title'],
    template: '<h1 class="main-header">{{ title }}</h1>'
});

Vue.component('nickname', {
    props: ['nickname'],
    template: '<div class="name-div">{{ nickname }}</div>'
});

Vue.component('main-tags', {
    props: ['tags'],
    template: '<p class="main-tags"><span class="main-tag" v-for="tag in tags">{{ tag }}</span></p>'
});

var app = new Vue({
    el: '#app',
    data: {
        fullName: 'Zsolt Takacs',
        nickname: 'ignotus87',
        mainTags: ['.net', 'wpf', 'full-stack', 'sql-server', 'php', 'javascript', 'etc.'],
        projects: [
			{
                title: 'BarcodeGenerator',
                link: 'https://github.com/ignotus87/BarcodeGenerator',
                tags: ['.net', 'wpf', 'c#'],
                description: 'A barcode generator implemented in WPF, utilizing ZXing'
            },
            {
                title: 'Laugh!',
                link: 'https://github.com/ignotus87/LaughApp',
                tags: ['xamarin forms', 'xamarin android'],
                description: 'A sample app showing a random image with playing a random sound, switching to another one when tapped. Also includes an ad bar.'
            },
            {
                title: 'RFID Reader',
                link: 'https://github.com/ignotus87/RFIDReader',
                tags: ['xamarin android'],
                description: 'A Xamarin app to collect MIFARE smart card IDs or in fact any other RFID.'
            },
			{
                title: 'WPF Please Wait - Example application',
                link: 'https://github.com/ignotus87/WpfPleaseWaitExample',
                tags: ['.net', 'wpf', 'c#'],
                description: 'A sample app demonstrating the use of the BusyIndicator of Xceed Wpf Toolkit in an application.'
            },
			{
                title: 'WPF Printable User Control Template Demo',
                link: 'https://github.com/ignotus87/WpfPrintUserControl',
                tags: ['.net', 'wpf', 'c#'],
                description: 'A sample app showing you how to create a printable, A4-sized template of 2x6 labels containing some pieces of text.'
            }
        ]
    }
});
