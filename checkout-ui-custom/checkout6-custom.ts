/// <reference lib="dom" />
/// <reference lib="esnext" />
/// <reference types="./typings/global.d.ts" />

/**
 * BlackFriday auto-enable variation
 */
$(document).ready(() => {
  const now = new Date();
  const start = new Date(`${now.getFullYear()}-10-16`);
  const end = new Date(`${now.getFullYear()}-11-25`);

  const isBlackFriday = now >= start && now <= end;

  if (isBlackFriday) {
    $("body").addClass("blackfriday");
  }
});
