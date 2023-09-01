const board = document.querySelector('#board')
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', setColor)
  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}

function setColor(event) {
  const elememt = event.target
  // elememt.style.backgroundColor = elementColor
  elememt.style.boxShadow = '0 0 1px #fff'
}

function removeColor(event) {
  const elememt = event.target
  elememt.removeAttribute('style')
}


const selectPerson = document.querySelectorAll('.js-select-person')
const boxPerson = document.querySelectorAll('.js-txt-person')
const btnStartVlad = document.querySelector('.js-btn-start-vlad')
const btnStartVeronika = document.querySelector('.js-btn-start-veronika')
const pageQuestions = document.querySelector('.js-questions')
const pageResult = document.querySelector('.js-result')
let countMoney = 10
let countFamily = 10
let countRelax = 10

questionsVlad.forEach(item => {
  pageQuestions.insertAdjacentHTML("beforeend", `<section class="question js-cart-vlad">
  <div class="question__icon">
    <img src="${item.img}" alt="" class="question__icon-img">
  </div>
  <div class="question__txt">
    <div class="question__number">${item.id}/<span>${questionsVlad.length}</span></div>
    <div class="question__question">${item.question}</div>
    <ul class="answers-list">
      <li class="answers-list__item">
        <div class="answers-list__tit js-answer-title">${item.answers[0].title}</div>
        <div class="answers-list__txt js-answer-text">
          <div class="answers-list__entry">
            <ul class="indicators indicators--sup-vers">
              <li class="indicators__item indicators__item--money">
                <div class="indicators__numb"><span class="js-text-money"></span><sup class="indicators__sup js-numb-money">${item.answers[0].indicatorsMoney}</sup></div>
              </li>
              <li class="indicators__item indicators__item--family">
                <div class="indicators__numb"><span class="js-text-family"></span><sup class="indicators__sup js-numb-family">${item.answers[0].indicatorsFamily}</sup></div>
              </li>
              <li class="indicators__item indicators__item--relax">
                <div class="indicators__numb"><span class="js-text-relax"></span><sup class="indicators__sup js-numb-relax">${item.answers[0].indicatorsRelax}</sup></div>
              </li>
            </ul>
            <p>${item.answers[0].text}</p>
          </div>
          <button class="btn js-next">Продолжить</button>
        </div>
      </li>
      <li class="answers-list__item">
        <div class="answers-list__tit  js-answer-title">${item.answers[1].title}</div>
        <div class="answers-list__txt js-answer-text">
          <div class="answers-list__entry">
            <ul class="indicators indicators--sup-vers">
            <li class="indicators__item indicators__item--money">
            <div class="indicators__numb"><span class="js-text-money"></span><sup class="indicators__sup js-numb-money">${item.answers[1].indicatorsMoney}</sup></div>
          </li>
          <li class="indicators__item indicators__item--family">
            <div class="indicators__numb"><span class="js-text-family"></span><sup class="indicators__sup js-numb-family">${item.answers[1].indicatorsFamily}</sup></div>
          </li>
          <li class="indicators__item indicators__item--relax">
            <div class="indicators__numb"><span class="js-text-relax"></span><sup class="indicators__sup js-numb-relax">${item.answers[1].indicatorsRelax}</sup></div>
          </li>
            </ul>
            <p>${item.answers[1].text}</p>
          </div>
          <button class="btn js-next">Продолжить</button>
        </div>
      </li>
      <li class="answers-list__item">
        <div class="answers-list__tit  js-answer-title">${item.answers[2].title}</div></li>
        <div class="answers-list__txt js-answer-text">
          <div class="answers-list__entry">
            <ul class="indicators indicators--sup-vers">
              <li class="indicators__item indicators__item--money">
                <div class="indicators__numb"><span class="js-text-money"></span><sup class="indicators__sup js-numb-money">${item.answers[2].indicatorsMoney}</sup></div>
              </li>
              <li class="indicators__item indicators__item--family">
                <div class="indicators__numb"><span class="js-text-family"></span><sup class="indicators__sup js-numb-family">${item.answers[2].indicatorsFamily}</sup></div>
              </li>
              <li class="indicators__item indicators__item--relax">
                <div class="indicators__numb"><span class="js-text-relax"></span><sup class="indicators__sup js-numb-relax">${item.answers[2].indicatorsRelax}</sup></div>
              </li>
            </ul>
            <p>${item.answers[2].text}</p>
          </div>
          <button class="btn js-next">Продолжить</button>
        </div>
    </ul>
  </div>
</section> `)
})

questionsVeronika.forEach(item => {
  pageQuestions.insertAdjacentHTML("beforeend", `<section class="question js-cart-veronika">
  <div class="question__icon">
    <img src="${item.img}" alt="" class="question__icon-img">
  </div>
  <div class="question__txt">
    <div class="question__number">${item.id}/<span>${questionsVlad.length}</span></div>
    <div class="question__question">${item.question}</div>
    <ul class="answers-list">
      <li class="answers-list__item">
        <div class="answers-list__tit js-answer-title">${item.answers[0].title}</div>
        <div class="answers-list__txt js-answer-text">
          <div class="answers-list__entry">
            <ul class="indicators indicators--sup-vers">
              <li class="indicators__item indicators__item--money">
                <div class="indicators__numb"><span class="js-text-money"></span><sup class="indicators__sup js-numb-money">${item.answers[0].indicatorsMoney}</sup></div>
              </li>
              <li class="indicators__item indicators__item--family">
                <div class="indicators__numb"><span class="js-text-family"></span><sup class="indicators__sup js-numb-family">${item.answers[0].indicatorsFamily}</sup></div>
              </li>
              <li class="indicators__item indicators__item--relax">
                <div class="indicators__numb"><span class="js-text-relax"></span><sup class="indicators__sup js-numb-relax">${item.answers[0].indicatorsRelax}</sup></div>
              </li>
            </ul>
            <p>${item.answers[0].text}</p>
          </div>
          <button class="btn js-next">Продолжить</button>
        </div>
      </li>
      <li class="answers-list__item">
        <div class="answers-list__tit  js-answer-title">${item.answers[1].title}</div>
        <div class="answers-list__txt js-answer-text">
          <div class="answers-list__entry">
            <ul class="indicators indicators--sup-vers">
            <li class="indicators__item indicators__item--money">
            <div class="indicators__numb"><span class="js-text-money"></span><sup class="indicators__sup js-numb-money">${item.answers[1].indicatorsMoney}</sup></div>
          </li>
          <li class="indicators__item indicators__item--family">
            <div class="indicators__numb"><span class="js-text-family"></span><sup class="indicators__sup js-numb-family">${item.answers[1].indicatorsFamily}</sup></div>
          </li>
          <li class="indicators__item indicators__item--relax">
            <div class="indicators__numb"><span class="js-text-relax"></span><sup class="indicators__sup js-numb-relax">${item.answers[1].indicatorsRelax}</sup></div>
          </li>
            </ul>
            <p>${item.answers[1].text}</p>
          </div>
          <button class="btn js-next">Продолжить</button>
        </div>
      </li>
      <li class="answers-list__item">
        <div class="answers-list__tit  js-answer-title">${item.answers[2].title}</div></li>
        <div class="answers-list__txt js-answer-text">
          <div class="answers-list__entry">
            <ul class="indicators indicators--sup-vers">
              <li class="indicators__item indicators__item--money">
                <div class="indicators__numb"><span class="js-text-money"></span><sup class="indicators__sup js-numb-money">${item.answers[2].indicatorsMoney}</sup></div>
              </li>
              <li class="indicators__item indicators__item--family">
                <div class="indicators__numb"><span class="js-text-family"></span><sup class="indicators__sup js-numb-family">${item.answers[2].indicatorsFamily}</sup></div>
              </li>
              <li class="indicators__item indicators__item--relax">
                <div class="indicators__numb"><span class="js-text-relax"></span><sup class="indicators__sup js-numb-relax">${item.answers[2].indicatorsRelax}</sup></div>
              </li>
            </ul>
            <p>${item.answers[2].text}</p>
          </div>
          <button class="btn js-next">Продолжить</button>
        </div>
    </ul>
  </div>
</section> `)
})

resultVlad.forEach(item => { 
  pageResult.insertAdjacentHTML("beforeend", `<div class="js-result-vlad none-active">
    <header class="header header--no-bg">
      <div class="container header__row">
        <div class="logos header__logos">
          <img src="img/brodude.svg" alt="" class="logos__img">
          <span class="logos__x"></span>
          <img src="img/etazhi.svg" alt="" class="logos__img">
        </div>
        <h1 class="title header__title">Результат</h1>
      </div>
    </header>
    <main class="main main--no-top-pad">
      <div class="container">
        <section class="result">
          <div class="result__icon js-result-icon">
            <img src="${item.img}" alt="">
          </div>
          <div class="result__txt">
            <ul class="indicators">
              <li class="indicators__item indicators__item--money">
                <div class="indicators__numb js-text-money"></div>
              </li>
              <li class="indicators__item indicators__item--family">
                <div class="indicators__numb js-text-family"></div>
              </li>
              <li class="indicators__item indicators__item--relax">
                <div class="indicators__numb js-text-relax"></div>
              </li>
            </ul>
            <div class="result__entry js-result-entry">
              ${item.text}
            </div>
            <a href="#" class="btn">Узнать подробнее</a>
          </div>
        </section>
      </div>
    </main>
    <footer class="footer footer--no-bg">
      <div class="container">
        <p>*№ 1 по количеству выданных ипотечных кредитов и использованию сервисов Домклик среди агентств недвижимости — партнёров банка ПАО «СберБанк» по итогам 1 квартала 2023 года. Финансовую услугу оказывает ПАО «СберБанк», лицензия ЦБ РФ 1481, а также «Лучшее агентство недвижимости» по результатам премии Urban Awards в 2023 году и победитель в номинации «Агентство недвижимости. Первичный рынок» по результатам премии PROESTATE & TOBY Award в 2022 году.</p>

        <p>**Сотрудничество с риелторами осуществляется в рамках партнёрства. Не является публичной офертой. Наличие соответствующих Вашему запросу вакансий не гарантируется.</p>
      </div>
    </footer>
  </div>`)
})

resultVeronika.forEach(item => { 
  pageResult.insertAdjacentHTML("beforeend", `<div class="js-result-veronika none-active">
    <header class="header header--no-bg">
      <div class="container header__row">
        <div class="logos header__logos">
          <img src="img/brodude.svg" alt="" class="logos__img">
          <span class="logos__x"></span>
          <img src="img/etazhi.svg" alt="" class="logos__img">
        </div>
        <h1 class="title header__title">Результат</h1>
      </div>
    </header>
    <main class="main main--no-top-pad">
      <div class="container">
        <section class="result">
          <div class="result__icon js-result-icon">
            <img src="${item.img}" alt="">
          </div>
          <div class="result__txt">
            <ul class="indicators">
              <li class="indicators__item indicators__item--money">
                <div class="indicators__numb js-text-money"></div>
              </li>
              <li class="indicators__item indicators__item--family">
                <div class="indicators__numb js-text-family"></div>
              </li>
              <li class="indicators__item indicators__item--relax">
                <div class="indicators__numb js-text-relax"></div>
              </li>
            </ul>
            <div class="result__entry js-result-entry">
              ${item.text}
            </div>
            <a href="#" class="btn">Узнать подробнее</a>
          </div>
        </section>
      </div>
    </main>
    <footer class="footer footer--no-bg">
      <div class="container">
        <p>*№ 1 по количеству выданных ипотечных кредитов и использованию сервисов Домклик среди агентств недвижимости — партнёров банка ПАО «СберБанк» по итогам 1 квартала 2023 года. Финансовую услугу оказывает ПАО «СберБанк», лицензия ЦБ РФ 1481, а также «Лучшее агентство недвижимости» по результатам премии Urban Awards в 2023 году и победитель в номинации «Агентство недвижимости. Первичный рынок» по результатам премии PROESTATE & TOBY Award в 2022 году.</p>

        <p>**Сотрудничество с риелторами осуществляется в рамках партнёрства. Не является публичной офертой. Наличие соответствующих Вашему запросу вакансий не гарантируется.</p>
      </div>
    </footer>
  </div>`)
})

const cardVlad = document.querySelectorAll('.js-cart-vlad')
const cardVeronika = document.querySelectorAll('.js-cart-veronika')
const next = document.querySelectorAll('.js-next')
const numbMoney = document.querySelectorAll('.js-numb-money')
const numbFamily = document.querySelectorAll('.js-numb-family')
const numbRelax = document.querySelectorAll('.js-numb-relax')
let textCountMoney = document.querySelectorAll('.js-text-money')
let textCountFamily = document.querySelectorAll('.js-text-family')
let textCountRelax = document.querySelectorAll('.js-text-relax')
const resultVladBox = document.querySelectorAll('.js-result-vlad')
const resultVeronikaBox = document.querySelectorAll('.js-result-veronika')

const sectionPerson = document.querySelector('.section-person')

selectPerson.forEach(item => {
  item.addEventListener('mouseover', selectBox)
})

// selectPerson.forEach(item => {
//   item.addEventListener('mouseleave', unSelectBox)
// })

indicatorColor(numbMoney) 
indicatorColor(numbFamily) 
indicatorColor(numbRelax)

function indicatorColor(item) {
  item.forEach(elem => {
    if(elem.innerText.includes('-')){
      elem.classList.add('indicators__sup--red')
    }
  })
}

// function unSelectBox(e) {
//   boxPerson.forEach(item => {
//     item.classList.remove('active-flex')
//   })
//   document.querySelector('#no-person').classList.add('active-flex');
//   sectionPerson.classList.remove('person-selected')
// }

function selectBox() {
  boxPerson.forEach(item => {
    item.classList.remove('active-flex')
    if(item.getAttribute('id') === this.getAttribute('data-person')){
      item.classList.add('active-flex')
    }   
  })
  sectionPerson.classList.add('person-selected')
}

btnStartVlad.addEventListener('click', function () {
  startGame()
  game(0, questionsVlad, cardVlad, resultVladBox)
})

btnStartVeronika.addEventListener('click', function () {
  startGame()
  game(0, questionsVeronika, cardVeronika, resultVeronikaBox)
})

function startGame() {
  scrollTo({
    top: 0,
    behavior: "smooth"
  })
  document.querySelector('.js-start').classList.add('none-active')
  pageQuestions.classList.add('active-block')
}

function game(i, person, card, resultEl) {
  if (i <= person.length - 1) {
    scrollTo({
      top: 0,
      behavior: "smooth"
    })
    card.forEach(elem => {
      elem.classList.remove('active-flex')
    })
    card[i].classList.add('active-flex')
    var item = card[i].querySelectorAll('.js-answer-title')
    var itemText = card[i].querySelectorAll('.js-answer-text')
   
    item.forEach((elem, ind) => {
     
      elem.addEventListener('click', function (e) {
         
        item.forEach(it => {
          it.classList.add('none-active')
        })
        elem.classList.remove('none-active')
        elem.classList.add('active')
        
        itemText.forEach(text => {
          text.classList.remove('active-block')
        })
        itemText[ind].classList.add('active-block')

        countMoney += Number(person[i].answers[ind].indicatorsMoney)
        countFamily += Number(person[i].answers[ind].indicatorsFamily)
        countRelax += Number(person[i].answers[ind].indicatorsRelax)

        textCountMoney.forEach(text => {
          text.textContent = countMoney
        })
        textCountFamily.forEach(text => {
          text.textContent = countFamily
        })
        textCountRelax.forEach(text => {
          text.textContent = countRelax
        })
        
        next[i].classList.add('active-block')
      })
    })

    next.forEach(item => {
      item.addEventListener('click', function () {
        game(i + 1, person, card, resultEl)
      })
    })
  } else {
    scrollTo({
      top: 0,
      behavior: "smooth"
    })
    card.forEach(elem => {
      elem.classList.remove('active-flex')
    })
    pageResult.classList.add('active-block')
    if (countMoney > countFamily && countRelax > countFamily) {
      resultEl.forEach(result => {
        result.classList.add('none-active')
      })
      resultEl[1].classList.remove('none-active')
    } else if (countMoney > countRelax && countFamily > countRelax) {
      resultEl.forEach(result => {
        result.classList.add('none-active')
      })
      resultEl[2].classList.remove('none-active')
    } else if (countRelax > countMoney && countFamily > countMoney) {
      resultEl.forEach(result => {
        result.classList.add('none-active')
      })
      resultEl[3].classList.remove('none-active')
    } else {
      resultEl.forEach(result => {
        result.classList.add('none-active')
      })
      resultEl[0].classList.remove('none-active')
    }
    
  }
}
