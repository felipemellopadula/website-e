import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "./validation";
import { Input } from "../Input";
import styles from "./Contact.module.scss";

export const Contato: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Aqui você pode adicionar a lógica para enviar o formulário
  };
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <div id="Contato" className={styles.contactWrapper}>
      <section className={styles.container}>
        <div className={styles.leftColumn}>
          <h2>Estávamos esperando por você!</h2>
          <p>Queremos ouvir sua opinião! Como podemos te ajudar?</p>
          <div className={styles.contactInfo}>
            <p>+55 11 94521 5444</p>
            <p>contato@agenciaunity.com.br</p>
            <p>
              Rua Inglês de Souza, 268
              <br />
              Jd. da Glória - São Paulo-SP.
            </p>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.contactForm}
          >
            <div className={styles.formRow}>
              <Input
                {...register("name")}
                label="Nome*"
                error={errors.name}
                className={styles.formInput}
                placeholder="Nome*"
              />
              <Input
                {...register("email")}
                label="Email*"
                type="email"
                error={errors.email}
                className={styles.formInput}
                placeholder="Email*"
              />
            </div>
            <div className={styles.formRow}>
              <Input
                {...register("phone")}
                label="Celular"
                error={errors.phone}
                placeholder="Cel"
                className={styles.formInput}
              />
              <Input
                {...register("subject")}
                label="Assunto*"
                error={errors.subject}
                className={styles.formInput}
                placeholder="Assunto*"
              />
            </div>
            <textarea
              {...register("message")}
              placeholder="Menssagem*"
              className={`${styles.input} ${
                errors.message ? styles.inputError : ""
              }`}
            ></textarea>
            {errors.message && (
              <span className={styles.errorMessage}>
                {errors.message.message}
              </span>
            )}
            <button type="submit">ENVIAR</button>
          </form>
        </div>
      </section>
    </div>
  );
};
