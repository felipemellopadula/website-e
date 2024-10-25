import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "./validation";
import { Input } from "../Input";
import styles from "./Contact.module.scss";

export const Contato: React.FC = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = useCallback(async (data: ContactFormData) => {
    setIsSubmitting(true);
    setStatusMessage(null);

    // Mostra mensagem imediata para o usuário
    setStatusMessage("Enviando sua mensagem...");

    try {
      const response = await fetch(
        "https://formsubmit.co/felipe@unitycomunicacao.com",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao enviar a mensagem. Tente novamente.");
      }

      setStatusMessage("Mensagem enviada com sucesso!");
      // Limpar os campos do formulário se desejado
    } catch (error) {
      setStatusMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return (
    <div id="Contato" className={styles.contactWrapper}>
      <section className={styles.container}>
        <div className={styles.leftColumn}>
          <h2>Estávamos esperando por você!</h2>
          <p>Queremos ouvir sua opinião! Como podemos te ajudar?</p>
          <div className={styles.contactInfo}>
            <p>+55 11 94521 5444</p>
            <p>contato@unitycomunicacao.com</p>
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
            noValidate
          >
            <div className={styles.formRow}>
              <Input
                {...register("name")}
                name="name"
                label="Nome*"
                error={errors.name}
                className={styles.formInput}
                placeholder="Nome*"
                required
              />
              <Input
                {...register("email")}
                name="email"
                label="Email*"
                type="email"
                error={errors.email}
                className={styles.formInput}
                placeholder="Email*"
                required
              />
            </div>
            <div className={styles.formRow}>
              <Input
                {...register("phone")}
                name="phone"
                label="Celular"
                error={errors.phone}
                placeholder="Cel"
                className={styles.formInput}
              />
              <Input
                {...register("subject")}
                name="subject"
                label="Assunto*"
                error={errors.subject}
                className={styles.formInput}
                placeholder="Assunto*"
                required
              />
            </div>
            <textarea
              {...register("message")}
              name="message"
              placeholder="Mensagem*"
              className={styles.input}
              required
            />
            {errors.message && (
              <span className={styles.errorMessage}>
                {errors.message.message}
              </span>
            )}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "ENVIANDO..." : "ENVIAR"}
            </button>
            {statusMessage && (
              <p className={styles.statusMessage}>{statusMessage}</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};
