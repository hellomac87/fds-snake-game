import { ROWS, COLS, INITIAL_DELAY} from './config';

// NOTE: ROWS, COLS에는 행의 개수, 열의 개수가 저장되어 있습니다.
// 이 변수를 활용해서 코드를 작성하세요!

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},
  ];
  this.direction = 'right';
  // 먹이의 좌표
  this.fruit = {x: 3, y: 5};
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  this.direction = "up";
  console.log('up');
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  this.direction = "down";
  console.log('down');
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  this.direction = "left";
  console.log('left');
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  this.direction = "right";
  console.log('right');
}
SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  let newHead;
  let newFruit;
  if (this.direction === 'up') {
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y - 1
    }
  }else if(this.direction === 'down') {
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y + 1
    }
  }else if (this.direction === 'right') {
    newHead = {
      x: this.joints[0].x + 1,
      y: this.joints[0].y
    }
  }else if (this.direction === 'left') {
    newHead = {
      x: this.joints[0].x - 1,
      y: this.joints[0].y
    }
  }
  this.joints.unshift(newHead);

  // 먹이 먹었을시
  if(!(newHead.x === this.fruit.x && newHead.y === this.fruit.y)){
    this.joints.pop();
  }else{
    newFruit = {
      x: Math.floor(Math.random() * COLS),
      y: Math.floor(Math.random() * ROWS)
    }
    this.fruit = newFruit;
  }

  if (newHead.x >= COLS || newHead.y >= ROWS || newHead.x < 0 || newHead.y < 0
    || this.joints.some(joints => joints.x === this.fruit.x && joints.y === this.fruit.y)){
    return false;
  }
  console.log(`nextState`);
  
  return true;
}


export default SnakeGameLogic;
