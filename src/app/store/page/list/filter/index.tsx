import React from 'react';

const FilterComponent = () => {

  const [state, setState] = React.useState({
    largeBuildingType1:'',
    largeBuildingType2:'',
    largeBuildingType3:'',
  })
  
  function onChangeHandler(e: React.ChangeEvent<HTMLSelectElement>){
    const {name, value} = e.target
    console.log(name, value)
    setState(prev => ({...prev, [name]:value}))
  }

    //선택 불가능처리된, 큰 범위 건물유형
    const disabledlargeBuildingTypeOptions = ['주거지역']
  
    //default width는 옵션중 최대길이에 맞춰서 selector의 default width가 맞춰진다!
    const largeBuildingTypeList = [
      '아파트',
      '주택',
      '별채',
      '독특한 숙소',
      'B&B',
      '부티크호텔zxcvzxcv',
    ];
  
  return (
    <div>
      이것은 필터 컴포넌트
      <select className='select' name={'largeBuildingType1'} onChange={onChangeHandler} defaultValue='주거지역'>
          {disabledlargeBuildingTypeOptions.map((option, index) => (
            <option key={index} value={option} disabled>
              {option}
            </option>
          ))}
          {largeBuildingTypeList.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
    </div>
  )
}

export default FilterComponent;