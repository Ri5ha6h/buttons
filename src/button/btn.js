import React from 'react'
import './btn.css'

const btn = () => {
  return (
    <div className='container'>
      <h2>Buttons</h2>
      <div className='btn'>
        <div>
          <span>{'<button />'}</span>
          <button className='d'>Default</button>
        </div>
        <div>
          <span>&:hover, &:focus</span>
          <button className='hf'>Default</button>
        </div>
        <div>
          <span>{'<button variant="outline" />'}</span>
          <button className='od'>Default</button>
        </div>
        <div>
          <span>&:hover, &:focus</span>
          <button className='ohf'>Default</button>
        </div>
        <div>
          <span>{'<button variant="text" />'}</span>
          <button className='td'>Default</button>
        </div>
        <div>
          <span>&:hover, &:focus</span>
          <button className='thf'>Default</button>
        </div>
        <div>
          <span>{'<button disableShadow />'}</span>
          <button className='ds'>Default</button>
        </div>
        <div></div>
        <div>
          <span>{'<button disable />'}</span>
          <button className='di' disabled>
            Disabled
          </button>
        </div>
        <div>
          <span>{'<button variant="text" disabled />'}</span>
          <button className='dh' disabled>
            Disabled
          </button>
        </div>
        <div>
          <span>{'<button startIcon="local-grocery-store" />'}</span>
          <button className='sg'>
            <i class='fas fa-shopping-cart'></i> Default
          </button>
        </div>
        <div>
          <span>{'<button endIcon="local-grocery-store" />'}</span>
          <button className='eg'>
            Default <i class='fas fa-shopping-cart'></i>
          </button>
        </div>
      </div>
      <div className='size'>
        <div>
          <span>{'<button size="sm" />'}</span>
          <button className='sm'>Default</button>
        </div>
        <div>
          <span>{'<button size="md" />'}</span>
          <button className='md'>Default</button>
        </div>
        <div>
          <span>{'<button size="lg" />'}</span>
          <button className='lg'>Default</button>
        </div>
      </div>
      <div className='row'>
        <div>
          <span>{'<button color="default" />'}</span>
          <button className='cd'>Default</button>
        </div>

        <div>
          <span>{'<button color="primary" />'}</span>
          <button className='pd'>Primary</button>
        </div>

        <div>
          <span>{'<button color="secondary" />'}</span>
          <button className='sed'>Secondary</button>
        </div>

        <div>
          <span>{'<button color="danger" />'}</span>
          <button className='dd'>Danger</button>
        </div>
        <div>
          <span>&:hover, &:focus</span>
          <button className='cdh'>Default</button>
        </div>
        <div>
          <span>&:hover, &:focus</span>
          <button className='pdh'>Primary</button>
        </div>
        <div>
          <span>&:hover, &:focus</span>
          <button className='sedh'>Secondary</button>
        </div>
        <div>
          <span>&:hover, &:focus</span>
          <button className='ddh'>Danger</button>
        </div>
      </div>
    </div>
  )
}

export default btn
