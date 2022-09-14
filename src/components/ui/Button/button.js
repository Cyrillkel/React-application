// по клику
function Button () {

  const handleClick = (event) => {
    console.log('click', event)
  }

  return (
    <div className="">
      <button onClick={handleClick} className="button">Оформить заказ
      </button>
    </div>
  )
}

// export default Button;

// кнопка с аргументами

// function Button () {

  
//     const handleClick =(paramsOne) => () => {
//       console.log(paramsOne)
//     } 
  
  
//     return (
//       <div className="">
//         <button onClick={() => handleClick('Олег')} className="button">Кнопка
//         </button>
//       </div>
//     )
//   }
  
  export default Button;