export function log(props) {
  return props.isLoggedIn ? (
    <div>
      <p>Andre</p>
      <button onClick={props.onLogged}>Iniciar</button>
    </div>
  ) : (
    <form>
      <input
        id="log-input"
        required
        autoFocus
        type="text"
        placeholder="Ingresa tu nombre"
      />
      <button type="submit" onClick={props.notLogged}>
        Iniciar
      </button>
    </form>
  );
}
