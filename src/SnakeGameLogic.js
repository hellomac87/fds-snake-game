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
  this.keys = 'right';
  // 먹이의 좌표
  this.fruit = {x: 3, y: 5};
}
SnakeGameLogic.prototype.feed = function(){
  if (this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y) {
    this.fruit.x = Math.floor(Math.random() * COLS);
    this.fruit.y = Math.floor(Math.random() * ROWS);

    // 몸과 겹쳐서 먹이가 생겼을 시
    this.joints.map((item) => {
      if(item.x === this.fruit.x && item.y === this.fruit.y){
        this.fruit.x = Math.floor(Math.random() * COLS);
        this.fruit.y = Math.floor(Math.random() * ROWS);
      }
    });

  } else {
    this.joints.pop();
  }
}
SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  this.keys = "up";
  console.log('up');
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  this.keys = "down";
  console.log('down');
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  this.keys = "left";
  console.log('left');
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  this.keys = "right";
  console.log('right');
}
SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  
  if (this.keys === 'down') {
    this.joints.unshift({
      x: this.joints[0].x,
      y: this.joints[0].y + 1
    });
    this.feed();
  }
  if (this.keys === 'up') {
    this.joints.unshift({
      x: this.joints[0].x,
      y: this.joints[0].y - 1
    });
    this.feed();
  }
  if (this.keys === 'right') {
    this.joints.unshift({
      x: this.joints[0].x + 1,
      y: this.joints[0].y
    });
    this.feed();
  }
  if (this.keys === 'left') {
    this.joints.unshift({
      x: this.joints[0].x - 1,
      y: this.joints[0].y
    });
    this.feed();
  }

  // 몸통 겹치기 체크
  for (let i = 0; i < this.joints.length - 1; i++) {
    if(this.joints[0].x === this.joints[i+1].x && this.joints[0].y === this.joints[i+1].y){
      return false;
    }
  }
  
  console.log(`nextState`);
  // 게임 끝내기
  if (this.joints[0].x >= COLS || this.joints[0].x < 0 || this.joints[0].y >= ROWS || this.joints[0].y < 0) {
    return false;
  }
  return true;
}


export default SnakeGameLogic;
