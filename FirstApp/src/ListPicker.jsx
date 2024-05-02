export default function ListPicker(values){
    const randIdx=Math.floor(Math.random()*values.value.length)
    const randElemnt=values.value[randIdx]
    return(<>
    <p>The List of values: {values.value}</p>
    <p>Random element is: {randElemnt}</p>
    </>)
}