import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "./validation";
import { Input } from "../Input";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import styles from "./Contact.module.scss";

export const Contato: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Cria uma promise de envio do email
    const sendEmailPromise = new Promise((resolve, reject) => {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone,
        subject: data.subject,
        message: data.message,
      };

      emailjs
        .send(
          "service_d01tocr",
          "template_3x0shiw",
          templateParams,
          "I6CDkyIieBMlS_ptU"
        )
        .then(() => resolve("Mensagem enviada com sucesso!"))
        .catch(() => reject("Erro ao enviar mensagem. Tente novamente."));
    });

    // Usa o toast.promise para mostrar o status do envio
    toast
      .promise(
        sendEmailPromise,
        {
          loading: "Enviando mensagem...",
          success: (message) => message as string,
          error: (err) => err as string,
        },
        {
          style: {
            minWidth: "250px",
          },
          success: {
            duration: 5000,
            icon: "✅",
          },
          error: {
            duration: 5000,
            icon: "❌",
          },
        }
      )
      .then(() => {
        reset();
      })
      .catch(() => {
        // Error handling já é feito pelo toast
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div id="Contato" className={styles.contactWrapper}>
      <Toaster position="top-right" />
      <section className={styles.container}>
        <div className={styles.leftColumn}>
          <h2>Estávamos esperando por você!</h2>
          <p>Como podemos te ajudar?</p>
          <div className={styles.contactInfo}>
            <p>+55 11 99694 0683</p>
            <p className={styles.contato}>contato@unitycomunicacao.com</p>
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
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? "Enviando..." : "ENVIAR"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
