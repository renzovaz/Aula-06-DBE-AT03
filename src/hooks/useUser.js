import { useState, useEffect } from 'react';

/**
 * useUser
 * -----------------------------------------------------------------------
 * Aplica o Single Responsibility Principle (SRP): este hook tem uma única
 * responsabilidade — buscar os dados do usuário (data fetching) e expor
 * seu estado (loading, dados, erro). Ele não sabe nada sobre como esses
 * dados serão exibidos na tela.
 */
export function useUser(userId = 1) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelado = false;

    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Falha ao buscar usuário');
        return res.json();
      })
      .then((data) => {
        if (!cancelado) {
          setUser(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancelado) setError(err.message);
      })
      .finally(() => {
        if (!cancelado) setLoading(false);
      });

    return () => {
      cancelado = true;
    };
  }, [userId]);

  return { user, loading, error };
}
