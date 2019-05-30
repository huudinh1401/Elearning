// https://raw.githubusercontent.com/huudinh1401/data/master/CB1/De/3.json
const URL = 'https://raw.githubusercontent.com/huudinh1401/data/master/';



function getType(title, level, stt) {
    return fetch(URL+title+"/"+level+"/"+stt+".json")
    .then(res => res.json())
    .then(resJSON => resJSON.type)

}
// getContent('CB1', 'Easy', '3')
// .then(content => console.log(content))
// .catch(err => console.log(err));
export default getType;