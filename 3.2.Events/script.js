const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  section=document.getElementsByTagName('section')[0];
  let div=document.createElement('div')
  div.classList.add("displayedsquare",e.target.classList[1]);
  section.appendChild(div);
  ul=document.getElementsByTagName('ul')[0];
  let li= document.createElement('li')
  li.textContent= ("["+getElapsedTime()+"]"+ "Created a new "+e.target.classList[1] + " square")
  ul.appendChild(li)
  console.log(e.target.classList[1])
  console.log(getElapsedTime())

}
