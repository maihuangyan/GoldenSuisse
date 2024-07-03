export default async function (context) {
  if (!context.store.state.loginForm.username || !context.store.state.loginForm.password || !context.store.state.loginForm.qr_data || !context.store.state.loginForm.qr_uniquecode) context.redirect('/account');
}
