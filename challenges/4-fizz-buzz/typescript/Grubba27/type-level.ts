
type Reverse<A> =
  `${A}` extends `${infer AH}${infer AT}`
    ? `${Reverse<AT>}${AH}` : A

type Digs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
type DigsNext<I = Digs, R = {}> =
  I extends [infer Head, infer Next, ...infer Tail]
    ? DigsNext<[Next, ...Tail], R & Record<Head, Next>>
    : { [K in keyof R]: R[K] }
type DigsPrev = { [K in keyof DigsNext as DigsNext[K]]: K }

type AddOne<A> =
  A extends `${infer AH}${infer AT}`
    ? AH extends '9' ? `0${AddOne<AT>}` : `${DigsNext[AH]}${AT}`
    : `1`
type SubOne<A> =
  A extends `${infer AH}${infer AT}`
    ? AH extends '0' ? `9${SubOne<AT>}` : `${DigsPrev[AH]}${AT}`
    : never
type Add<A, B> =
  A extends `${infer AH}${infer AT}` ?
    B extends `${infer BH}${infer BT}`
      ? BH extends '0' ? `${AH}${Add<AT, BT>}` : Add<AddOne<A>, SubOne<B>>
      : A : B
type Mul<A, B, R = '0'> =
  A extends '0' ? R :
    B extends '0' ? R :
      A extends `${infer AH}${infer AT}`
        ? AH extends '0' ? Mul<AT, `0${B}`, R> : Mul<SubOne<A>, B, Add<R, B>>
        : R
type Multiply<A extends string | number | bigint, B extends string | number | bigint> =
  Reverse<Mul<Reverse<A>, Reverse<B>>>


type Division<
  W extends number,
  D extends number,
  Error extends any = never,
  Q extends string = '0'
  > =
  W extends 0
    ? Q extends never ? Error : Q
    : W extends never ? Error : Division<Subtract<W, D>, D, Error, AddOne<Q>>

type ConstructTuple<
  L extends number,
  R extends unknown[] = []
  > = R["length"] extends L
  ? R
  : ConstructTuple<L, [...R, unknown]>

type Subtract<
  M extends number,
  S extends number
  > = ConstructTuple<M> extends [...subtrahend: ConstructTuple<S>, ...rest: infer Rest]
  ? Rest["length"]
  : never
const div: Division<9, 3> = "3"
const div: Division<15, 3> = "5"

type FizzBuzzValidator<
  V extends number
  > =
  Division<V, 3> extends never
    ? never
    : Division<V, 5> extends never
      ? never
      : 'FizzBuzz'

type BuzzValidator<
  V extends number
  > =
  Division<V, 3> extends never
    ? never
    : 'Buzz'

type FizzValidator<
  V extends number
  > =
  Division<V, 5> extends never
    ? never
    : 'Fizz'

type FizzBuzz
  <V extends number> =
  FizzBuzzValidator<V> extends never
    ? FizzValidator<V> extends never
      ? BuzzValidator<V> extends never
        ? V
        :'Buzz'
      :'Fizz'
    :'FizzBuzz'

const res: FizzBuzz<2> // 2
const b: FizzBuzz<3> // Buzz
const f: FizzBuzz<5> // Fizz
const fizzBuzz: FizzBuzz<15> // FizzBuzz

type FizzBuzzArr<
  V extends Array<number>,
  A extends Array<any> = []
  > =
  V extends [infer E, ...infer D]
    ? FizzBuzzArr<D, [...A,  ...[FizzBuzz<E>]]>
    : A

const _: FizzBuzzArr<[1,2,3,4,5,6,7,8,9, 15]> //  [1, 2, "Buzz", 4, "Fizz", "Buzz", 7, 8, "Buzz", "FizzBuzz"]
