import { useUser } from '../hooks/useUser';

/**
 * UserProfile (REFATORADO)
 * -----------------------------------------------------------------------
 * ANTES: o componente fazia o fetch diretamente dentro de um useEffect e
 * também formatava o HTML — violava o SRP (duas responsabilidades numa
 * função só).
 *
 * DEPOIS: toda a lógica de busca de dados foi extraída para o hook
 * useUser. Este componente tem uma única responsabilidade: apresentar
 * (renderizar) a interface a partir do estado retornado pelo hook.
 */
function UserProfile({ userId = 1 }) {
  const { user, loading, error } = useUser(userId);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

export default UserProfile;
