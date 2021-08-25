import React, {useState, useRef, useEffect} from "react";
import "./App.css"

const  HEIGHT = 400;
const  WIDTH   = 600;

const getRandom = () => {
    const rand = (x) => Math.floor(Math.random() * x); 
    return  { 
        x: rand(HEIGHT),
        y: rand(WIDTH) 
    }
}



const resetRows = () => {
    return [...Array(HEIGHT)].map((_) => 
    [...Array(WIDTH)].map((_)=> 'grid-item'));
}





const App = () => {
    const [rows, setRows] = useState(resetRows());
    const [snake, setSnake] = useState( [getRandom()] );
    const [food, setFood] = useState(getRandom());
    const [curDirection, setDirection] = useState('Right');
    
    const changeDirection = (e) => {
        let  direction = {
            Left: 37,
            Up:   38,
            Right:39, 
            Down: 40
        };
        for (let key in direction) {
            if (direction[key] === e.KeyCode) {
                setDirection(key);
                break;
            }
        }     
    }
    
    
    document.addEventListener("keydown", changeDirection, false)


    const move = () => {
        const  direction = {
            Left: {x: -1, y: 0},
            Up:   {x: 0,  y: 1},
            Right:{x: 1, y: 0},
            Down: {x: 0, y: -1},
        };
        const delta = direction[curDirection];
        const newSnake = snake;
        const head = newSnake[0];
        head.x += delta.x;  head.x += HEIGHT + ((head.x<0) - (head.x>=HEIGHT));
        head.y += delta.y;  head.y += WIDTH + ((head.y<0) - (head.y>=WIDTH));
        newSnake.unshift(head); 
        ((head.x === food.x) &&
        (head.y === food.y)) ? 
            newSnake.pop(): 
            setFood(getRandom);
        setSnake(newSnake);
        update();
    }   
    
    const update = () => {
        const newRows = rows;
        snake.forEach(element => {
            newRows[element.x][element.y] = 'snake'
        });
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

    useInterval(move, 100);

    
    const displayRows = rows.map((row) =>
        row.map((col) => 
            {
                return (<div className={col}></div>)
            }
        )
    )
    return (
        <div className="snake-container">
            <div className="grid">
                {displayRows}
            </div>
        </div>
    )

   
    
}





export default App;