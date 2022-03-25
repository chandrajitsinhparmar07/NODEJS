function name(name,callback)
{
    console.log('Hi '+name)
    callback();
}

function callme()
{

    console.log('Call me Called.')
}

name('Chandu',callme)