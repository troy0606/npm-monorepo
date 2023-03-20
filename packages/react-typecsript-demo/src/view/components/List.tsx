import React from 'react';
import IProps from '../../models/interfaces/ICommon';

const List: React.FC<IProps> = ({people}): JSX.Element => {

  // 方法一定要定義返回的型別
  // typescript可以在型別推斷的時候協助檢查
  const renderList = (): Array<JSX.Element> => {
    return people.map((person) => (
      <li className="List">
        <div className='List-header'>
        <img className='List-img' src={person.img} alt="" />
        <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className='List-note'>{person.note}</p>
      </li>
    ))
  };
  return (
    <div>
      {
        renderList()
      }
    </div>
  )
}

export default List;