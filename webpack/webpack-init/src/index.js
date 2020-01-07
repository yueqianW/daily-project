import React,{Component} from 'react'
import ReactDOM from 'react-dom'

// <h1 id="test" title="this is h1">哒哒哒<h1>

const myH1 = React.createElement(
    'h1',
    {id: 'test', title: 'this is h1'},
    '哒哒哒',
)

ReactDOM.render(
    myH1,
    document.getElementById('test')
)

// const myH2 = <h2>下一行 666</h2>
//
// ReactDOM.render(
//     myH2,
//     document.getElementById('test2')
// )