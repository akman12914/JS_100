// 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.

class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }

  attack() {
    console.log("파이어볼");
  }
}
const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
