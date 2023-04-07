/**
 * A set of functions called "actions" for `forgotPassword`
 */

export default {
  async test(ctx) {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
