//End of game notification
"use strict";
var div;
var blink;
var time;
var pointy;
var pointx;

function checkMove(pos)
// funcrion to test if tile can move.
{
  if (calcLeft(pointx, pointy) == (pos-1))
  {
    return true;
  }

  if (calcDown(pointx, pointy) == (pos-1))
  {
    return true;
  }

  if (calcUp(pointx, pointy) == (pos-1))
  {
    return true;
  }

  if (calcRight(pointx, pointy) == (pos-1))
  {
    return true;
  }
  array[i].onmouseover=function() {
        if (validMove(this)) { 
          $(this).addClass("movablepiece");
          $(this).fadeTo("slow", 0.5);
          $(this).fadeTo("slow", 1);

  /*
}
function Blink()
{
  blink --;
  if (blink == 0)
  {
    var body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = "#FFFFFF";
    alert('you win');
    return;
  }
  if (blink % 2)
  {
    var body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = "#00FF00";  
  }
  else
  {
    var body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = "#FF0000";
  }
  time = setTimeout(Blink, 100);
}

function winGame()
{
  var body = document.getElementsByTagName('body');
  body[0].style.backgroundColor = "#FF0000";
  blink = 10;
  time = setTimeout(Blink, 100);
}
*/
function completion()
{
  var flag = true;
  for (var i = 0; i < div.length; i++) {
    var y = parseInt(div[i].style.top);
    var x = parseInt(div[i].style.left);

    if (x != (i%4*100) || y != parseInt(i/4)*100)
    {
      flag = false;
      break;
    }
  }
  return flag;
}

function calcLeft(x, y)
{
  var xx = parseInt(x);
  var yy = parseInt(y);

  if (xx > 0)
  {
    for (var i = 0; i < div.length; i++) 
    {
      if (parseInt(div[i].style.left) + 100 == xx && parseInt(div[i].style.top) == yy)
      {
        return i;
      } 
    }
  }
  else 
  {
    return -1;
  }
}

function calcRight (x, y) {
  var xx = parseInt(x);
  var yy = parseInt(y);
  if (xx < 300)
  {
    for (var i =0; i<div.length; i++){
      if (parseInt(div[i].style.left) - 100 == xx && parseInt(div[i].style.top) == yy) 
      {
        return i;
      }
    }
  }
  else
  {
    return -1;
  } 
}

function calcUp (x, y) {
  var xx = parseInt(x);
  var yy = parseInt(y);
  if (yy > 0)
  {
    for (var i=0; i<div.length; i++)
    {
      if (parseInt(div[i].style.top) + 100 == yy && parseInt(div[i].style.left) == xx) 
      {
        return i;
      }
    } 
  }
  else 
  {
    return -1;
  }
}

function calcDown (x, y)
{
  var xx = parseInt(x);
  var yy = parseInt(y);
  if (yy < 300)
  {
    for (var i=0; i<div.length; i++)
    {
      if (parseInt(div[i].style.top) - 100 == yy && parseInt(div[i].style.left) == xx) 
      {
        return i;
      }
    }
  }
  else
  {
    return -1;
  } 
}
//change tile position
function swap (pos) {
  var temp = div[pos].style.top;
  div[pos].style.top = pointy;
  pointy = temp;

  temp = div[pos].style.left;
  div[pos].style.left = pointx;
  pointx = temp;
}

window.onload = function ()
{
  var puzzleArea = document.getElementById('puzzlearea');
  
  div = puzzleArea.getElementsByTagName('div');

  for (var i=0; i<div.length; i++)
  {
    div[i].setAttribute("class","puzzlepiece");
    div[i].style.left = (i%4*100)+'px';
    div[i].style.top = (parseInt(i/4)*100) + 'px';
    div[i].style.backgroundPosition= '-' + div[i].style.left + ' ' + '-' + div[i].style.top;
    div[i].onmouseover = function()
    {
      if (checkMove(parseInt(this.innerHTML)))
      {
        this.setAttribute("class","puzzlepiece movablepiece");
      }
    };
    div[i].onmouseout = function()
    {
      this.setAttribute("class","puzzlepiece");
    };

    div[i].onclick = function()
    {
      if (checkMove(parseInt(this.innerHTML)))
      {
        swap(this.innerHTML-1);
        if (completion())
        {
          winGame();
        }
        return;
      }
    };
  }

  pointx = '300px';
  pointy = '300px';

  var shufflebutton = document.getElementById('shufflebutton');
  shufflebutton.onclick = function()
  {

    for (var i=0; i<250; i++)
    {
      var rand = parseInt(Math.random()* 100) %4;
      if (rand == 0)
      {
        var tmp = calcUp(pointx, pointy);
        if ( tmp != -1)
        {
          swap(tmp);
        }
      }
      if (rand == 1)
      {
        var tmp = calcDown(pointx, pointy);
        if ( tmp != -1) 
        {
          swap(tmp);
        }
      }

      if (rand == 2)
      {
        var tmp = calcLeft(pointx, pointy);
        if ( tmp != -1)
        {
          swap(tmp);
        }
      }

      if (rand == 3)
      {
        var tmp = calcRight(pointx, pointy);
        if (tmp != -1)
        {
          swap(tmp);
        }
      }
    }
  };
};