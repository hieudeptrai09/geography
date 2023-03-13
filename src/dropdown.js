export const themes = [
  'Thủ đô',
  'Quốc gia',
  'Quốc ca',
  'Mã FIFA',
  'Mã IOC',
  'Tên miền cấp cao nhất',
  'Quốc kì',
  'Quốc huy',
  'Hình dạng lãnh thổ',
]

export const isNeedImage = (problem) => {
  return (
    problem === 'Quốc kì' ||
    problem === 'Quốc huy' ||
    problem === 'Hình dạng lãnh thổ'
  )
}

export const continents = [
  'Tất cả',
  'Châu Phi',
  'Châu Mỹ',
  'Châu Á',
  'Châu Âu',
  'Châu Đại Dương',
]
