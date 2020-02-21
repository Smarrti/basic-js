module.exports = function createDreamTeam(names) {
  let team = new Array();
  if (!Array.isArray(names)) {
    return false;
  }
  names.map(el => {
    if ((typeof el === 'string') && el !== '') {
      el = el.trim();
      team.push(el[0].toUpperCase());
    } else {
      return false;
    }
  })
  return team.sort().join('');
};