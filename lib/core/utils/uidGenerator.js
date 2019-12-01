let uniqueIDincrement = 0;

// Helper to generate a UNIQUE ID string, like "jqo6n85j", with optional prefix.
// Bonus: The UID is also a timestamp, so could be used to debug the order & speed in which IDs were assigned.
// We can also analyse at the "increment" suffix to understand the order in which IDs were assigned.
// Optional feature: If you supply a DOM element, we set it's id if it doesn't already have one.
export default function createUid(prefix = 'id-', elem) {
  // We could have used Math.random() but Date() gives the opportunity to debug when ids were generated.
  // The uid part of an id can be converted back to a date using new Date(parseInt('jqo6lzfo',36))
  const generatedUid = `${prefix + new Date().getTime().toString(36)}-${(uniqueIDincrement += 1)}`;

  // Return its existing id if it already has one:
  const uid = elem ? elem.id : generatedUid;
  return uid;
}
