import { fruits } from "./foods";

// returns a randonmly selected fruit from array
export function choice(items) {
    const fruit = fruits[Math.floor(Math.random() * fruits.length)];
    return items[fruit];
}

export function remove(items, item) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice( i + 1 )]
        }
    }
}