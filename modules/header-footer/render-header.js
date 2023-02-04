export function headerRender(){
    const header = document.getElementsByClassName('header')[0];
    header.innerHTML = '';
    let headerHTML = `
    <div class="flexbox">
    <div class="search">
      <div>
        <input id="search" type="text" placeholder="Search . . ." required>
      </div>
    </div>
  </div>
  </div>
    `
    header.insertAdjacentHTML('afterbegin', headerHTML)
}


