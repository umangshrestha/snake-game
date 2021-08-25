import React, {useState, useRef, useEffect} from "react";
import "./App.css"


const  HEIGHT = 10;
const  WIDTH  = 10;

// mapping keycode  for changing direction
const LEFT = 37;
const UP   = 38;
const RIGHT =39; 
const DOWN = 40;
const STOP = 32; /* [space] used for pause */



const getRandom = () => {
    const rand = (x) => Math.floor(Math.random() * x); 
    return  { 
        x: rand(WIDTH),
        y: rand(HEIGHT) 
    }
}


const emptyRows = () => [...Array(WIDTH)].map((_) => [...Array(HEIGHT)].map((_)=> 'grid-item'));


const App = () => {
    const [rows, setRows] = useState(emptyRows());
    const [snake, setSnake] = useState( [] );
    const [food, setFood] = useState(getRandom());
    const [curDirection, setDirection] = useState(STOP);
    /*
     * I am sure we can use snake[snake.length-1] or shanke[0] instead of head
     * but it will take time to write and debug and fix the issues as it pops along
     *  which i dont feel is worth it right now
     */
    const [head, setHead] = useState(getRandom());

    const hasEaten = () => (head.x === food.x) &&(head.y === food.y)
    
    const isWon = () => {
        // TODO: the code doesnt work. 
        for (let i=1; i< snake.length; i++) {
            if ((head.x === snake[0].x) &&(head.y === snake[0].y)) {
                return true;
            }
        }
        return false;
    }
    const changeDirection = ({keyCode}) => { 
        switch (keyCode) {
            case LEFT:
                (curDirection === RIGHT)? 
                    setDirection(RIGHT):
                    setDirection(LEFT)
                break;
            case RIGHT:
                (curDirection === LEFT)?
                    setDirection(LEFT):
                    setDirection(RIGHT)
                break;
            case UP:
                (curDirection === DOWN)?
                    setDirection(DOWN):
                    setDirection(UP)
                break;
            case DOWN:
                (curDirection === UP)?
                    setDirection(UP):
                    setDirection(DOWN)
                break;
            default:
                break;
        }
    }    
    document.addEventListener("keydown", changeDirection, false)

    const move = () => {
        const delta = {x:0, y:0}; 
        switch (curDirection) {
            case LEFT:  delta.y = -1; break;    
            case UP:    delta.x = -1; break;
            case RIGHT: delta.y = 1;  break;
            case DOWN:  delta.x = 1;  break;
            default: return;
        }
                            /* keep the value within range of 0 to HEIGHT */
        head.x += delta.x;  head.x += HEIGHT * ((head.x<0)-(head.x>=HEIGHT));
        head.y += delta.y;  head.y += WIDTH * ((head.y<0)-(head.y>=WIDTH));

        setHead(head)

        if (hasEaten()) {
            setFood(getRandom());
            snake.push({...head});
        } else if (isWon()) {
                let value = snake.length *10;
                alert(`your score: ${value}`);
                setHead(getRandom());
                setSnake([]);
                setRows(emptyRows())
                setDirection(RIGHT);
                return;
        }

        snake.shift()
        snake.push({...head}); 
        setSnake(snake);
        update(); 

     
    }   
    

    const update = () => {
        const newRows = emptyRows(); /* I am not sure, but I feel this code is the issue causing delay in frame */
        snake.forEach(element => newRows[element.x][element.y] = 'snake')
        newRows[food.x][food.y] = 'food';
        setRows(newRows);
    }

    const useInterval = (callback, delay) => {
      const savedCallback = useRef();
      useEffect(()=> {
        savedCallback.current = callback;
      }, [callback]);
      useEffect(() => {
        function tick() {
          savedCallback.current();
        }
        if (delay !== null) {
          let id = setInterval(tick, delay);
          return () => clearInterval(id);
        }
      }, [delay]);
    }

    useInterval(move, 200);
    
    const displayRows = rows.map((row, i) => row.map((value, j) =>  <div name={`${i}=${j}`} className={value} />))
    return (
        <div className="a">
            <h1> Snake  v0.1.1</h1>
            <ul>
                <li>press "space" to pause the game.</li>
                <li>press "arrow keys" to change direction/ unpause.</li>
            </ul>
            <div className="snake-container">
                <div className="grid">{displayRows}</div>
            </div>
        </div>
    )    
}










export default App;