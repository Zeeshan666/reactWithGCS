import './App.css';
import Card from './Components/Card';

function PropTest() {

    return (
        <>
        <Card testing ="hello" />
        <Card testing ="world"/>
        </>
    )
}
// you can reuse the Card component as many time you need
// to send value or props over to Card => <Card var= value, {obj/arr}  />
// make sure the Component takes in an arg (props) or destructure it to directly access it
// best practice => always pass props as an object and destructure it as well give default values
export default PropTest;