import {Component} from "react";

class ClassComponent extends Component {

    constructor(props) {
        super(props);
        // створюємо state(має бути обов'язково об'єкт)
        this.state = {a: 0, b: 25}


        //При монтуванні першим відтворюється constructor
        console.log('constructor');

    }

    componentDidMount() {

        //Відпрацьовує після render третім етапом при монтуванні,тобто виконує дії якісь після того
        // як наша сторінка пронрузилася (це заміна useEffect)
        console.log('componentDidMount');

    }


    //Розберемо що таке snapshot і коли відпрацьовує (також приймає попереднє значення props,попереднє значення state)
    getSnapshotBeforeUpdate(prevProps, prevState) {

        if (prevState.a === 5) {
            return 'Snapshot!!!!'
        }

        return null;

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        //Відпрацьовує при оновленні і приймає попереднє значення props,попереднє значення state і snapshot
        //він буде відпрацьовувати в тих випадках, якщо у нас оновилися props або state
        console.log('componentDidUpdate');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('snapshot', snapshot);

    }

    componentWillUnmount() {

        //метод який буде відображати якусь інфу якщо у нас відбудеться демонтування(видалення або приховування її
        // наприклад натисканням на кнопку) компоненти
        console.log('componentWillUnmount');

    }


    inc() {

        //допоможе нам відобразити componentDidUpdate адже ми змінюємо state при кліку на кнопку
        // this.setState({a: 31})

    //допоможе відобразити snapshot при збільшенні a на 1. Snapshot необхідний для відображення інфи якоїсь при Update.
    this.setState(prev=>({...prev,a:prev.a+1}))


    }



//щоб відмалювати розмітку ми перевизначаємо метод render
    render() {

        //Другим етапом після конструктора при монтуванні
        // відпрацьовує render(він буде перезапускатися в тих випадках,
        // якщо у нас оновилися props, оновився state або ми перезапустили сторінку)
        console.log('render');

        return (
            <div>
                Welcome to Ukraine!!!
                <h4>А:{this.state.a}</h4>
                <h4>B:{this.state.b}</h4>

                {/*показує що можна прокидувати пропси з App.js*/}
                <div>Props:{this.props.name}</div>
                <button onClick={() => this.inc()}>Change A</button>
            </div>
        )
    }

}

export {
    ClassComponent
}