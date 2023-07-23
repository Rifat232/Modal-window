'use strict';
const modal = document.querySelector( '.modal' );
const overLay = document.querySelector( '.overlay' );
const btnOpenModal = document.querySelectorAll( '.show-modal' );
const btnCloseModal = document.querySelector( '.close-modal' );

const showModel = function ()
{
    console.log( 'a' );
   modal.classList.remove( 'hidden' );
   overLay.classList.remove( 'hidden' );
}

const hideModel = function ()
{
    console.log( 'a' );
   modal.classList.add( 'hidden' );
   overLay.classList.add( 'hidden' );
}

for ( let i = 0; i < btnOpenModal.length; i++ )
{
    // console.log( btnOpenModal[ i ].textContent );
    btnOpenModal[ i ].addEventListener( 'click', showModel)
}

btnCloseModal.addEventListener( 'click', hideModel );
overLay.addEventListener( 'click', hideModel );


// hide model window using 'Escape' key

document.addEventListener( 'keydown', function ( e )
{
    console.log( e.key );
    if ( e.key === 'Escape' && !modal.classList.contains( 'hidden' ) )
    {
        hideModel();
    }

})