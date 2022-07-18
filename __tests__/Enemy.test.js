const Enemy = require('../lib/Enemy.js');
const Potion = require('../lib/Potion');


//test to see if enemy object is created
test('creates an enemy object', () => {
    const enemy = new Enemy('goblin', 'sword');

    //expect statements
    expect(enemy.name).toBe('goblin');
    expect(enemy.weapon).toBe('sword');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));

});

  //test to get information about the enemys health
  test('get info on the enemys health', () => {
    const enemy = new Enemy('goblin' , 'sword');

    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));

  });

  //test to see if enemy is alive
  test('test to see if enemy is alive or not', () => {
    const enemy = new Enemy('goblin' , 'sword');
    expect(enemy.isAlive()).toBeTruthy();
    enemy.health = 0;
    expect(enemy.isAlive()).toBeFalsy();
  });

  //test to see if reduceHealth works
  test('subtracts from enemys health', () => {
    const enemy = new Enemy('goblin' , 'sword');
    const oldHealth = enemy.health;

    enemy.reduceHealth(5);

    expect(enemy.health).toBe(oldHealth-5);

    enemy.reduceHealth(99999);
    expect(enemy.health).toBe(0);
  });

  //test to get enemys attack value
  test('gets enemys attack value', () => {
    const enemy = new Enemy('goblin' , 'sword');
    enemy.strength = 10;

    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
  });

  //test to get enemy weapon
  test('gets a description of the enemy', () => {
    const enemy = new Enemy('goblin', 'sword');

    expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));

    
  })