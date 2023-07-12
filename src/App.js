import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [showing, setShowing] = useState(false);
  // const onClick = () => {
  //   setValue((prev) => prev + 1);
  // };
  function Hello() {
    useEffect(() => {
      console.log('hi :)');
      return () => console.log('bye :(');
    }, []);
    return <h1>Hello!</h1>;
  }
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  useEffect(() => {
    console.log('movie api');
  }, []);
  useEffect(() => {
    if (keyword !== '' && keyword.length > 1) {
      console.log('search for', keyword);
    }
  }, [keyword]); // [dependency(지켜보려는것)] : dependency가 변화 할 때 코드를 실행, 따라서 [](빈 배열)로 두면 처음 한 번만 실행되는 것임 cf. [keyword, counter]와 같은 형태로 적어 keyword나 counter 둘 중 하나가 변화할 때 코드 실행시킬 수도 있음
  // useEffect(() => {}, [counter]);
  // console.log('i run all the time');
  // const iRunOnlyOnce = () => {
  //   console.log('i run only once');
  // };
  // useEffect(iRunOnlyOnce, []); // 첫 번째 render 시에만 함수 실행
  // useEffect를 통해 언제 코드를 실행할 지 선택권을 가질 수 있음
  // 단순화 하여 useEffect(() => {console.log("CALL THE API")},[]); 써도 됨
  return (
    <div className='App'>
      <input
        value={keyword}
        onChange={onChange}
        type='text'
        placeholder='Search here...'
      />
      <h1 className={styles.title}>{counter}</h1>
      {/* <button onClick={onClick}>click me</button> */}
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;
