# Imagens da galeria

Adicione nesta pasta imagens locais otimizadas, preferencialmente em WebP.

Sugestões de nomes:

- `barber-cut.webp`
- `barber-shop.webp`
- `beard.webp`
- `barber-service.webp`
- `barber-finish.webp`

Depois, edite o item correspondente em `src/config/content.ts`:

```ts
image: {
  src: "/images/barber-cut.webp",
  alt: "Barbeiro finalizando um corte masculino",
  objectPosition: "center",
},
```

Enquanto `image` estiver como `null`, a galeria continuará usando o placeholder
visual em CSS.
