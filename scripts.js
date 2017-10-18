var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju.',
        pic: 'http://www.harrypotterforseekers.com/images/sym_crabbengoyle.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny.',
        pic: 'http://www.kobiety.net.pl/Jon-Favreau-kreci-Krola-lwa_img57ec507a6b37b.jpg'
    },
    {
        id: 3,
        title: '2012',
        desc: 'Film o katastrofie.',
        pic: 'http://dovga.com/images/video/8180-the-matrix-behind-the-scenes-300.jpg'
    },
    {
        id: 4,
        title: 'Pulp Fiction',
        desc: 'Film nie wiadomo o czym...',
        pic: 'https://i.ebayimg.com/images/g/q~IAAOSwsB9WEjjg/s-l300.jpg'
    }
];
var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.pic})
    );
});
var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );
ReactDOM.render(element, document.getElementById('app'));