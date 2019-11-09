let films = [
		{genre: "Animation", title: "Wildfood", duration: "3:47", date: "2014-07-16"},
		{genre: "Film", title: "The Deer", duration: "6:24", date: "2014-02-28"},
		{genre: "Animation", title: "The Ghost", duration: "11:40", date: "2012-04-10"},
		{genre: "Film", title: "Animals", duration: "6:40", date: "2005-12-21"},
		{genre: "Animation", title: "Wagons", duration: "21:40", date: "2007-04-12"},
	];
films.forEach(function(film) {
    $("tbody").append(`
    <tr>
        <td>${film['genre']}</td>
        <td>${film['title']}</td>
        <td>${film['duration']}</td>
        <td>${film['date']}</td>
    </tr>`)
});



var char1 = 0,
    char2 = null;

$(function(){
  $('table thead tr th').click(function(){
    char1 = $(this).index();
    if(char1 != char2){
      char2 = char1;
      sorting = [];
      tbody1 = null; 
      $('table tbody tr').each(function(){
        sorting.push($(this).children('td').eq(char2).html() + ', ' + $(this).index());
      });
      
      sorting = sorting.sort();
      sortIt();
    }
  });
})

function sortIt(){
  for(var i = 0; i < sorting.length; i++){
    rowid = parseInt(sorting[i].split(', ')[1]);
    tbody1 = tbody1 + $('table tbody tr').eq(rowid)[0].outerHTML;
  }
  $('table tbody').html(tbody1);
}