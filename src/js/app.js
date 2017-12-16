import '../css/main.scss'
import 'jquery'
import 'bootstrap'

import { Test } from './test'

const outputRandomInt = _ => {
    console.log(Test.randomInteger())
}

const outputRandomRange = _ => {
    $('#randomInt').text('test')
    console.log(Test.randomRange())
}

$('#randomInt').addEventListener('click', outputRandomInt)
$('#randomRange').addEventListener('click', outputRandomRange)
