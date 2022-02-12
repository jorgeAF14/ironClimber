## IronClimber APP - MARKDOWN

|METHOD | URL  | DESCRIPTION | PROTECTED|

| GET | /auth/signup | renderiza formulario de registro | None |

| POST | /auth/signup | renderiza formulario de registro | None |

| GET | /auth/login | renderiza formulario de registro | None |

| POST | /auth/login | renderiza formulario de registro | None |

| POST | /auth/logout | renderiza formulario de registro | None |

| GET | /places/around | muestra los lugares que están cerca | None * |

| GET | /places/create | renderiza formulario de creación de lugar | None  |

| POST | /places/create | permite crear un lugar | None * (EXPERT) |

| GET | /places/:id/details | muestra detalle del lugar seleccionado | None  |

| GET | /places/:id/reviews | permite añadir comentarios del lugar seleccionado | None  |

| GET | /places/:id/update | modificar detalles del lugar seleccionado | Expert & ADMIN |

| POST | /places/:id/update | modificar detalles del lugar seleccionado | Expert & ADMIN |

| POST | /places/delete | permite eliminar un lugar | YES: ADMIN  |

| GET | /users/:id/details | permite ver los detalles de un usuario | None |

| GET | /users/:id/update | permite modificar los detalles de un usuario | User(id) |

| POST | /users/:id/update | permite modificar los detalles de un usuario | User(id) |

| POST | /users/:id/delete | permite eliminar un usuario | User(id) & ADMIN |


