import { useDispatch } from 'react-redux'
import { add, toggleFavorite } from '../../store/reducers/cart'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

type Props = {
  produto: ProdutoType
  estaNosFavoritos?: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => dispatch(toggleFavorite(produto))}
        type="button"
      >
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(add(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
