(function () {
  var tabs = document.querySelectorAll('.past-streams__season-tabs button');
  var sections = document.querySelectorAll('.past-streams__season');

  function handleSelectedSeason(tabNum) {
    sections.forEach(function (section, index) {
      var sectionNum = section.getAttribute('data-season');

      if (sectionNum === tabNum) {
        section.classList.add('past-streams__season--selected');
        tabs[index].classList.add('season-tab--selected');
      } else {
        section.classList.remove('past-streams__season--selected');
        tabs[index].classList.remove('season-tab--selected');
      }
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function (e) {
      var tabNum = e.target.getAttribute('data-season');

      handleSelectedSeason(tabNum);
    });
  });
})();
